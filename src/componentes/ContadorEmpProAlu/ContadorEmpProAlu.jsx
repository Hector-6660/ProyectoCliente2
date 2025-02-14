import React, { useEffect, useState } from 'react';


const ContadorEmpProAlu = () => {
    const [numEmpresas, setNumEmpresas] = useState(0);

    useEffect(() => {
        fetch('http://marcapersonalfp.test/api/v1/empresas/count')
            .then(response => response.json())
            .then(data => setNumEmpresas(data.numEmpresas))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <>
            <div>
                <h4>Empresas</h4>
                <p>{numEmpresas}</p>
            </div>
            <div>
                <h4>Proyectos</h4>
                <p>0</p>
            </div>
            <div>
                <h4>Alumnos</h4>
                <p>0</p>
            </div>
        </>
    )

}

export default ContadorEmpProAlu;