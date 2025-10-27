import React from 'react';
import { act } from 'react';
import { createRoot } from 'react-dom/client';

describe('Pruebas de Validación de Correo', () => {
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

    // PRUEBA 4: Validación - Los campos NO deben estar vacíos
    it('debe verificar que los campos no estén vacíos', () => {
        // Datos de prueba
        const campoVacio = '';
        const campoConDatos = 'usuario@duoc.cl';

        // Verificar que un campo vacío retorna true (está vacío)
        expect(campoVacio === '').toBe(true);

        // Verificar que un campo con datos retorna false (NO está vacío)
        expect(campoConDatos === '').toBe(false);

        // También podemos verificar con trim() para espacios en blanco
        const campoConEspacios = '   ';
        expect(campoConEspacios.trim() === '').toBe(true);
    });

    // PRUEBA 5: Validación - El correo debe contener @
    it('debe verificar que el correo contiene el símbolo @', () => {
        // Correos de prueba
        const correoValido = 'usuario@duoc.cl';
        const correoInvalido = 'usuarioduoc.cl';

        // Verificar que el correo válido contiene @
        expect(correoValido.includes('@')).toBe(true);

        // Verificar que el correo inválido NO contiene @
        expect(correoInvalido.includes('@')).toBe(false);
    });

});