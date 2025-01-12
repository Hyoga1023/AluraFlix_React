import React, { useState, useEffect } from 'react';
import styles from './index.module.css';

// Function to get YouTube thumbnail
const getYoutubeThumbnail = (url) => {
    let videoId;
    if (url.includes("youtu.be/")) {
        videoId = url.split("youtu.be/")[1]?.split("?")[0];
    } else {
        videoId = url.split("v=")[1]?.split("&")[0];
    }
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';
};

function Categorias() {
    const [videos, setVideos] = useState({});
    const [editVideo, setEditVideo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('/Aluraflix_React/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }
                return response.json();
            })
            .then(data => {
                setVideos(data.videos);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error:', error);
                setError('No se pudieron cargar los videos. Por favor, intenta nuevamente más tarde.');
                setLoading(false);
            });
    }, []);

    const handleDelete = (category, id) => {
    const updatedCategory = videos[category].filter(video => video.id !== id);
    setVideos({ ...videos, [category]: updatedCategory });
    };

    const handleEdit = (category, id) => {
        const videoToEdit = videos[category].find(video => video.id === id);
        setEditVideo({ ...videoToEdit, category });
    };

    const handleModalClose = () => {
        setEditVideo(null);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEditVideo(prev => ({ ...prev, [name]: value }));
    };

    const handleSaveChanges = (e) => {
        e.preventDefault();
        const updatedVideos = { ...videos };
        const updatedCategory = updatedVideos[editVideo.category].map(video =>
            video.id === editVideo.id ? editVideo : video
        );
        setVideos({ ...updatedVideos, [editVideo.category]: updatedCategory });
        setEditVideo(null);
    };

    if (loading) {
        return <p>Cargando videos...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className={styles.categorias}>
            {Object.keys(videos).map(category => (
                <div key={category}>
                    <h2>{category.charAt(0).toUpperCase() + category.slice(1)}</h2>
                    <div className={styles.cardsContainer}>
                        {videos[category].map(video => (
                            <div key={video.id} className={`card ${styles.videoCard}`}>
                                <div className="card-body">
                                    <a href={video.url} target="_blank" rel="noopener noreferrer">
                                        <img
                                            src={getYoutubeThumbnail(video.url)}
                                            alt={`Miniatura de ${video.title}`}
                                            className={styles.videoThumbnail}
                                            onError={(e) => { e.target.src = 'https://via.placeholder.com/150'; }}
                                        />
                                    </a>
                                    <h5 className="card-title">{video.title}</h5>
                                    <p className="card-text">{video.description}</p>
                                    <button
                                        className={styles.btn1}
                                        onClick={() => handleEdit(category, video.id)}
                                    >
                                        Editar
                                    </button>
                                    <button
                                        className={styles.btn2}
                                        onClick={() => handleDelete(category, video.id)}
                                    >
                                        Borrar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}

            {editVideo && (
                <div className={`modal show d-block ${styles.customModal}`} tabIndex="-1">
                    <div className={`modal-dialog ${styles.customModalDialog}`}>
                        <div className={`modal-content ${styles.customModalContent}`}>
                            <div className={`modal-header ${styles.customModalHeader}`}>
                                <h5 className={`modal-title ${styles.customModalTitle}`}>Editar Video</h5>
                                <button
                                    type="button"
                                    className={`btn-close ${styles.btnClose}`}
                                    aria-label="Close"
                                    onClick={handleModalClose}
                                ></button>
                            </div>
                            <div className={`modal-body ${styles.customModalBody}`}>
                                <form onSubmit={handleSaveChanges}>
                                    <div className="mb-3">
                                        <label htmlFor="videoTitle" className="form-label">Título</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="videoTitle"
                                            name="title"
                                            value={editVideo.title}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="videoCategory" className="form-label">Categoría</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="videoCategory"
                                            name="category"
                                            value={editVideo.category}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="videoImage" className="form-label">Imagen</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='https://...'
                                            id="videoImage"
                                            name="image"
                                            value={editVideo.image || ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="videoUrl" className="form-label">Video</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            placeholder='https://...'
                                            id="videoUrl"
                                            name="url"
                                            value={editVideo.url || ''}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="videoDescription" className="form-label">Descripción</label>
                                        <textarea
                                            className="form-control"
                                            id="videoDescription"
                                            name="description"
                                            rows="3"
                                            value={editVideo.description}
                                            onChange={handleInputChange}
                                        ></textarea>
                                    </div>
                                    <div className={`modal-footer ${styles.customModalFooter}`}>
                                        <button type="submit" className="btn btn-danger">Guardar</button>
                                        <button type="button" className="btn btn-dark" onClick={handleModalClose}>Limpiar</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Categorias;
