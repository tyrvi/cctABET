import React, { Component } from 'react';

class FileList extends Component {
    constructor() {
        super();

        this.fileInput = undefined;

        this.downloadFile = this.downloadFile.bind(this);
        this.addFile = this.addFile.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
        this.upload = this.upload.bind(this);
        this.setFileInputRef = this.setFileInputRef.bind(this);
    }

    setFileInputRef(r) {
        this.fileInput = r;
    }

    downloadFile() {

    }

    addFile() {
    }

    deleteFile(index) {
        let files = this.state.files;
        files.splice(index, 1);
        this.setState({
            files: files
        });
    }

    upload() {
        var formData = new FormData();
        console.log(this.fileInput.files[0]);
        formData.append('file', this.fileInput.files[0], 'myfile');

        fetch('files/upload', {
            method: 'POST',
            credentials: 'same-origin',
            body: formData
        })
        .then(res =>
            res.json())
        .then(res => {
            console.log(res);
        });
    }

    render() {
        /*const fileList = this.state.files.map((file, i) => {
            return (
            <div>
                <b>{file.filename}</b>
                <button onClick={this.deleteFile.bind(this, {i})}>{'Delete'}</button>
            </div>);
        });*/

        return (
            <div>
                <input ref={this.setFileInputRef} name="file" type="file" multiple onChange={e => this.addFile(e.target.files)}/>
                <div><small>Only accepts <b>.zip</b> file for class</small></div>

                <div>
                    <button onClick={this.upload}>Upload</button>
                </div>
            </div>
        );
    }
}
export default FileList;
