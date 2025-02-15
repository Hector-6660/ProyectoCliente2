import React, { useState } from 'react';


const ContadorEmpProAlu = () => {
    const [numEmpresas, setNumEmpresas] = useState(0);
    const [numProyectos, setNumProyectos] = useState(0);
    const [numAlumnos, setNumAlumnos] = useState(0);

    const apiEmp = 'http://marcapersonalfp.test/api/v1/empresas/count';
    const apiPro = 'http://marcapersonalfp.test/api/v1/proyectos/count';
    const apiAlu = 'http://marcapersonalfp.test/api/v1/users/count';

    fetch(apiEmp)
        .then(response => response.json())
        .then(data => setNumEmpresas(data.count))

    fetch(apiPro)
        .then(response => response.json())
        .then(data => setNumProyectos(data.count))

    fetch(apiAlu)
        .then(response => response.json())
        .then(data => setNumAlumnos(data.count))

    return (
        <>
            <div>
                <h4>Empresas</h4>
                <p>{numEmpresas}</p>
            </div>
            <div>
                <h4>Proyectos</h4>
                <p>{numProyectos}</p>
            </div>
            <div>
                <h4>Alumnos</h4>
                <p>{numAlumnos}</p>
            </div>
        </>
    )

}

export default ContadorEmpProAlu;