import React, {useState, useRef, ChangeEvent, useCallback} from 'react';
import classNames from 'classnames';
import styles from './FilesDropZone.module.scss';
import Loader from '@/src/components/ui/Loader/Loader';
import Image from 'next/image';
import success from '../../../../../public/assets/icons/success.png';
import error from '../../../../../public/assets/icons/error.png';

const FileDropZone = () => {
    const [isDragOver, setIsDragOver] = useState(false);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isUploadSuccess, setIsUploadSuccess] = useState<boolean | null>(null);

    const onFileUploadSuccess = () => {
        setIsLoading(false);
        setIsUploadSuccess(true);
    }

    const onFileUploadError = () => {
        setIsLoading(false);
        setIsUploadSuccess(false);
    }

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(true);
    };

    const handleDragLeave = () => {
        setIsDragOver(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragOver(false);

        const file = e.dataTransfer.files[0];
        if (file) {
            uploadFile(file);
        }
    };

    const handleFileInputChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files && e.target.files[0];
        if (file) {
            console.log(file);
            uploadFile(file);
        }
    };

    const uploadFile = (file: File) => {
        const allowedFileTypes = ['image/png', 'image/jpeg', 'image/jpg', 'image/gif'];

        if (!allowedFileTypes.includes(file.type)) {
            // Обработка ошибки - неверный тип файла
            if (onFileUploadError) {
                onFileUploadError();
            }
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        fetch('api', {
            method: 'POST',
            body: formData,
        })
            .then(response => response.json())
            .then(data => {
                if (onFileUploadSuccess) {
                    onFileUploadSuccess();
                }
            })
            .catch(error => {
                if (onFileUploadError) {
                    onFileUploadError();
                }
            });
    };

    const renderElement = useCallback(() => {
        if (isLoading) {
            return <Loader />
        }
        if (isUploadSuccess === true) {
            return (
                <div className={styles.result}>
                    <Image src={success} alt={'Success'} className={styles.result__icon} />
                    <span className={styles.result__text}>
                        Upload Successful!<br/>To Select New Image, Refresh The Page
                    </span>
                </div>
            );
        }
        if (isUploadSuccess === false) {
            return (
                <div className={styles.result}>
                    <Image src={error} alt={'Error'} className={styles.result__icon} />
                    <span className={styles.result__text}>
                        Upload Failed<br/>Something Seems Wrong, Please Refresh The Page
                    </span>
                    <button onClick={() => setIsUploadSuccess(null)} className={styles.result__button}>
                        Try again
                    </button>
                </div>
            );
        }

        return (
            <div
                className={classNames(styles.dropZone, {
                    [styles.dragOver]: isDragOver,
                })}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
            >
                <input
                    type="file"
                    ref={fileInputRef}
                    style={{display: 'none'}}
                    onChange={handleFileInputChange}
                    accept=".png, .jpg, .jpeg, .gif"
                />
                <div className={styles.text}>Click to browse or <br/>drag and drop your files</div>
            </div>
        );
    }, [handleDrop, handleFileInputChange, isDragOver, isLoading, isUploadSuccess]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.header}>
                <span className={styles.new}>New Upload</span>
                <button onClick={() => fileInputRef.current?.click()} className={styles.button}>Browse</button>
            </div>
            <div className={styles.container}>
                {renderElement()}
            </div>
        </div>
    );
};

export default FileDropZone;