
import http from 'k6/http';
import { sleep, check } from 'k6';

export const options = {
    //iterations: 10,
    thresholds: {
        http_req_duration: ['p(90)<3000', 'max<5000'], // 90% das requisições devem ser menores que 3000ms
        http_req_failed: ['rate<0.01'], // Taxa de falha deve ser menor que 1%
    },  
    //vus: 10, // Número de usuários virtuais (VU) que executarão o teste
    //duration: '30s', // Duração total do teste
    stages: [
        { duration: '10s', target: 10 }, // Aumenta gradualmente para 10 VUs em 10 segundos
        { duration: '20s', target: 10 }, // Mantém 10 VUs por 20 segundos
        { duration: '10s', target: 30 }, // Aumenta gradualmente para 30 VUs em 10 segundos
        { duration: '10s', target: 0 }, // Mantém 0 VUs por 10 segundos
        { duration: '20s', target: 0 }, // Mantém 0 VUs por 10 segundos
    ],
};


export default function () {
    const url = 'http://localhost:3000/login';
    const payload = JSON.stringify({
        "username": "julio.lima",
        "senha": "123456"
    });

    const params = {
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const res = http.post(url, payload, params);

    check(res, {
        'Validar se status 200': (r) => r.status === 200,
        'Validar que o token é uma string': (r) => typeof (r.json('token')) === 'string',
    });

    sleep(1);
}
