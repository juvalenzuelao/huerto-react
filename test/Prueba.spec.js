import React from 'react';
import { createRoot } from 'react-dom/client';
import { act } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

describe('Prueba simple del botón Iniciar Sesión', () => {
    let container = null;
    let root = null;

    beforeEach(() => {
        container = document.createElement('div');
        document.body.appendChild(container);
        root = createRoot(container);
    });

    afterEach(() => {
        act(() => {
        root.unmount();
        });
        container.remove();
        container = null;
        root = null;
    });

    // PRUEBA 1: RENDERIZADO CORRECTO
    it('debe renderizar el link de Iniciar sesión correctamente', () => {
        act(() => {
        root.render(
            <BrowserRouter>
            <Link to="/iniciar-sesion">
                <b>Iniciar sesión</b>
            </Link>
            </BrowserRouter>
        );
        });

        const loginLink = container.querySelector('a');
        
        expect(loginLink).not.toBeNull();
        expect(loginLink.textContent).toBe('Iniciar sesión');
    });

    // PRUEBA 2: PROPIEDADES (href correcto)
    it('debe tener el atributo href correcto', () => {
        act(() => {
        root.render(
            <BrowserRouter>
            <Link to="/iniciar-sesion">
                <b>Iniciar sesión</b>
            </Link>
            </BrowserRouter>
        );
        });

        const loginLink = container.querySelector('a');
        
        expect(loginLink.getAttribute('href')).toBe('/iniciar-sesion');
    });

    // PRUEBA 3: EVENTOS (click)
    it('debe ser clickeable', () => {
        let clicked = false;
        const handleClick = () => {
        clicked = true;
        };

        act(() => {
        root.render(
            <BrowserRouter>
            <Link to="/iniciar-sesion" onClick={handleClick}>
                <b>Iniciar sesión</b>
            </Link>
            </BrowserRouter>
        );
        });

        const loginLink = container.querySelector('a');
        
        act(() => {
        loginLink.click();
        });

        expect(clicked).toBe(true);
    });
});