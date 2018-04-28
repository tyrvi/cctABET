import React, { Component } from 'react';

class FileList extends Component {
    constructor() {
        super();

        this.fileInput = undefined;

        this.downloadFile = this.downloadFile.bind(this);
        this.fileChanged = this.fileChanged.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
        this.upload = this.upload.bind(this);
        this.setFileInputRef = this.setFileInputRef.bind(this);

        this.state = {
            file_error: undefined,
            file: undefined,
            local_file: false
        };
    }

    componentDidMount() {
        fetch('files?form_id=' + this.props.form.formID, {
            method: 'GET',
            credentials: 'same-origin'
        })
        .then(res =>
            res.json())
        .then(res => {
            if(res.file !== undefined) {
                if(res.file.original_file_name !== undefined) {
                    this.setState({file: res.file.original_file_name});
                }
            }
        });
    }

    setFileInputRef(r) {
        this.fileInput = r;
    }

    downloadFile() {
        let url = window.location.protocol + '//' +
                  window.location.hostname + ':' +
                  '3001/' +
                  'files/download?form_id=' + this.props.form.formID;
        console.log(url);
        window.open(url);
    }

    fileChanged(e) {
        let file = undefined;
        if(e.length !== 0) {
            file = e[0].name;
        }

        this.setState({
            local_file: true,
            file: file
        });
    }

    deleteFile(index) {
        if (window.confirm('Are you sure you want to delete this file?')) {
            this.setState({
                file: undefined,
                local_file: true
            });
        }
    }

    upload() {
        if(!this.state.local_file) {
            console.log('No need to upload to server');
            return;
        }

        var formData = new FormData();
        let file = this.fileInput.files[0];
        if(file === undefined) {
            fetch('files/delete?form_id=' + this.props.form.formID, {
                method: 'GET',
                credentials: 'same-origin'
            })
            .then(res =>
                res.json())
            .then(res => {
                if(res.error) {
                    console.error(res.error);
                    this.setState({file_error: res.error});
                }
            });
        }
        else {
            formData.append('file', file, file.name);

            fetch('files/upload?form_id=' + this.props.form.formID, {
                method: 'POST',
                credentials: 'same-origin',
                body: formData
            })
            .then(res =>
                res.json())
            .then(res => {
                console.log(res);

                if(res.not_zip) {
                    this.setState({file_error: "File not a zip"});
                } else if(res.file_missing) {
                    this.setState({file_error: "No file uploaded"});
                } else if(res.error) {
                    this.setState({file_error: "Something went wrong: " + res.error});
                } else {

                }
            });
        }
    }

    render() {
        let file_error_message = this.state.file_error;
        let file_error = undefined;
        if(file_error_message !== undefined) {
            file_error = (<div style={{color: "#f45342"}}>{file_error_message}</div>);
        }

        let file = undefined;
        if(this.state.file) {
            file = (
                <div><b>{this.state.file}</b> <button onClick={this.downloadFile}>Download</button><button onClick={this.deleteFile}>Remove</button></div>
            );
        }

        return (
            <div>
                {file}
                <input ref={this.setFileInputRef} name="file" type="file" multiple onChange={e => this.fileChanged(e.target.files)}/>
                {file_error}
                <div><small>Only accepts <b>.zip</b> files</small></div>

                <div>
                    <button onClick={this.upload}>Upload</button>
                </div>
            </div>
        );
    }
}
export default FileList;
