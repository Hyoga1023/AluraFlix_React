import React, { useState } from 'react';
import axios from 'axios';
import styles from './index.module.css';

function NuevoVideo() {
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        image: '',
        url: '',
        description: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleClear = () => {
        setFormData({
            title: '',
            category: '',
            image: '',
            url: '',
            description: ''
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        axios.get(`http://localhost:3001/videos/${formData.category}`)
            .then(response => {
                const categoryVideos = response.data;
                const newVideo = { ...formData, id: categoryVideos.length + 1 };

                axios.patch(`http://localhost:3001/videos/${formData.category}`, [...categoryVideos, newVideo])
                    .then(response => {
                        console.log('Video guardado:', response.data);
                        handleClear();
                    })
                    .catch(error => {
                        console.error('Error al guardar el video:', error);
                    });
            })
            .catch(error => {
                console.error('Error al obtener la categoría:', error);
            });
    };

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                <h1>Nuevo Video</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="videoTitle" className="form-label">Título</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder="Ingrese el Titulo del Video"
                            id="videoTitle"
                            name="title"
                            value={formData.title}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="videoCategory" className="form-label">Categoría</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='Ingrese la Categoría del Video'
                            id="videoCategory"
                            name="category"
                            value={formData.category}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="videoImage" className="form-label">Imagen</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='https://www.google.com/url?sa=i&url=https%3A%2F%2Fapps...'
                            id="videoImage"
                            name="image"
                            value={formData.image}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="videoUrl" className="form-label">Video</label>
                        <input
                            type="text"
                            className="form-control"
                            placeholder='https://www.youtube.com/url?sa=i&url=https%3A%2F%2Fap..'
                            id="videoUrl"
                            name="url"
                            value={formData.url}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="videoDescription" className="form-label">Descripción</label>
                        <textarea
                            className="form-control"
                            id="videoDescription"
                            placeholder='Ingrese la Descripción del Video'
                            name="description"
                            rows="3"
                            value={formData.description}
                            onChange={handleInputChange}
                        ></textarea>
                    </div>
                    <div className={styles.buttonContainer}>
                        <button type="submit" className="btn btn-danger">Guardar</button>
                        <button type="button" className="btn btn-dark" onClick={handleClear}>Limpiar</button>
                    </div>
                </form>
            </main>
        </div>
    );
}

export default NuevoVideo;
