import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/nosotros.css';

function Nosotros() {
    return (
        <>
            <Navbar />

            <section className="nosotros container my-5">
                <h2 className="mb-4 text-center">Nosotros</h2>

                <p>
                    <strong>HuertoHogar</strong> es una plataforma de comercio electrónico establecida que revoluciona la forma en que los chilenos acceden a productos frescos del campo.
                    Con <strong>6 años de trayectoria consolidada</strong>, la empresa se ha posicionado como un referente en el sector al operar como intermediario directo entre
                    productores agrícolas y consumidores finales, eliminando las cadenas tradicionales de distribución.
                </p>

                <p>
                    Nuestro compromiso es acercar alimentos saludables y de calidad a cada hogar, apoyando al mismo tiempo a los agricultores locales mediante un
                    modelo justo y sostenible. Creemos en el poder de la tecnología para transformar la manera en que consumimos, fortaleciendo la conexión entre
                    el campo y la mesa de las familias chilenas.
                </p>

                <p>
                    Además, <strong>HuertoHogar</strong> promueve prácticas agrícolas responsables, fomentando la producción orgánica y el respeto por el medio ambiente.
                    Nuestros clientes no solo adquieren productos frescos, sino que también contribuyen al desarrollo de comunidades rurales y a la conservación del entorno natural.
                </p>

                <p>
                    Nos esforzamos por ofrecer una experiencia de compra sencilla, confiable y segura, incluyendo entrega a domicilio, información detallada de cada producto,
                    y atención personalizada para resolver cualquier consulta de nuestros clientes. Cada transacción con nosotros apoya un modelo más transparente y ético de consumo.
                </p>

                <h3 className="mt-5 mb-3 text-center">Visítanos</h3>
                <p className="text-center">
                    Nuestro huerto principal se encuentra en Paine, Chile. Además, <strong>HuertoHogar</strong> ha expandido sus nuevas tiendas a varias ciudades:
                    Santiago, Puerto Montt, Villarica, Viña del Mar, Valparaíso y Concepción. ¡Te invitamos a conocer nuestras instalaciones y productos frescos directamente en cualquiera de nuestras sedes!
                </p>

                <div className="mapa text-center">
                    <iframe
                        className="mapa-iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d24704.395437415216!2d-72.25042378212527!3d-39.28712953514868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9614623c8e00fe6f%3A0xe7812f04b9706fcc!2sVillarrica%2C%20Araucan%C3%ADa!5e0!3m2!1ses-419!2scl!4v1757122887697!5m2!1ses-419!2scl"
                        title="Mapa de ubicación Villarrica"
                    />
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Nosotros;