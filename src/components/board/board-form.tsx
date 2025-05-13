import { useState } from "react";
import PostBoard from "../../api/board/postBoard";
import { useApi } from "../../api/useApi";
import {
    Form,
    Text,
    TextArea,
    AttachFileButton,
    AttachFileInput,
    SubmitBtn,
    ErrorMessage
} from "../../style/board-form-components.style"

const PostBoardForm = () => {
    const api = useApi();
    const [isLoading, setIsLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [title, setTitle] = useState("");
    const [tweet, setTweet] = useState("");
    const [files, setFiles] = useState<File[]>([]);

    const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
    }
    const onTweetChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setTweet(e.target.value);
    }

    const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = (e?.target);

        if (files) {
            const selectedFiles = Array.from(files).filter(file => file.size <= 1024 * 1024);
            setFiles(selectedFiles);

            if (selectedFiles.length < files.length) {
                alert('1MB 이상의 파일은 업로드할 수 없습니다.');
            }
        }
    }

    const validation = () => {
        if (title === "") {
            setErrorMessage("Title is require field!");
            return;
        } else if (tweet === "") {
            setErrorMessage("Tweet is require field!");
            return;
        }
    }

    const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (isLoading || title === "" || tweet === "" || tweet.length > 180) {
            validation();
            return;
        }

        try {
            setErrorMessage("");
            setIsLoading(true);

            const postBoardDto = {
                title: title,
                contents: tweet,
                imageFiles: files,
            }
            const response = await PostBoard(postBoardDto, api);
            console.log(response?.data);



        } catch (err) {
            console.error(err);
        } finally {

            setFiles([]);
            setTitle("")
            setTweet("");
            setIsLoading(false);
        }

    }

    return (
        <Form onSubmit={onSubmit}>
            <Text
                placeholder="Write your title!"
                value={title}
                onChange={onTitleChange}
            />

            <TextArea
                rows={5}
                maxLength={180}
                placeholder="What is Happening?!"
                onChange={onTweetChange}
                value={tweet}
            />

            <AttachFileButton
                htmlFor="file">
                {files.length > 0 ? `${files.length} file(s) added ✅: ${files.map(file => file.name).join(', ')}` : "Add photo"}
            </AttachFileButton>

            <AttachFileInput
                id="file"
                type="file"
                accept="image/*"
                multiple
                onChange={onFileChange}
            />

            <SubmitBtn type="submit">
                {isLoading ? "Posting..." : "Post Tweet"}
            </SubmitBtn>
            {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}

        </Form>
    );

}

export default PostBoardForm;