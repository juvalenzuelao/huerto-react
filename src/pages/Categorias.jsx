import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Categorias() {
    const [categoria, setCategoria] = useState("Frutas");

    const categorias = ["Frutas", "Verduras", "Orgánicos"];

    const productos = {
        Frutas: [
            { nombre: "Manzanas", img: "/img/Manzanas.jpg" },
            { nombre: "Plátanos Cavendish", img: "/img/PlatanosVarios.jpg" },
            { nombre: "Naranja", img: "/img/Naranja.jpg" },
        ],
        Verduras: [
            { nombre: "Pimientos Tricolores", img: "/img/PimientosTricolores.jpg" },
            { nombre: "Zanahorias Orgánicas", img: "/img/ZanahoriasVarias.jpg" },
            { nombre: "Espinaca", img: "/img/Espinaca.jpg" },
        ],
        Orgánicos: [
            { nombre: "Miel", img: "/img/Miel.jpg" },
            { nombre: "Manzanas", img: "/img/Manzanas.jpg" },
            { nombre: "Zanahorias Orgánicas", img: "/img/ZanahoriasVarias.jpg" },
        ],
    };

    const imagenCategoria = {
        Frutas: "/img/Manzanas.jpg",
        Verduras: "/img/PimientosTricolores.jpg",
        Orgánicos: "/img/Miel.jpg",
    };

    return (
        <>
            <Navbar />

            <div className="container mt-4 text-center">
                <h1 className="titulo-productos">Categorías de Productos</h1>

                <div className="d-flex justify-content-center gap-3 mt-4 mb-5">
                    {categorias.map((nombre) => (
                        <div
                            key={nombre}
                            className={`card p-2 ${categoria === nombre ? "border-primary" : ""
                                }`}
                            style={{ width: "150px", cursor: "pointer" }}
                            onClick={() => setCategoria(nombre)}
                        >
                            <img
                                src={imagenCategoria[nombre]}
                                alt={nombre}
                                style={{ width: "100%", height: "100px", objectFit: "cover" }}
                            />
                            <p className="mt-2 fw-bold">{nombre}</p>
                        </div>
                    ))}
                </div>

                <h3 className="mb-4">{categoria}</h3>
                <div className="row justify-content-center">
                    {productos[categoria].map((prod) => (
                        <div key={prod.nombre} className="col-lg-3 col-md-6 col-sm-6 mb-4">
                            <div className="card">
                                <img
                                    src={prod.img}
                                    alt={prod.nombre}
                                    className="card-img-top"
                                    style={{ height: "200px", objectFit: "cover" }}
                                />
                                <div className="card-body">
                                    <h5 className="card-title text-start">{prod.nombre}</h5>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Categorias;
