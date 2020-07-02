import axios from 'axios';

const api = axios.create({
	baseURL: 'http://localhost:3333'
});

export default api;

// iOS com emulador: localhost
// iOS com fisico: IP da máquina
// Android com Emulador: comando (adb reverse tcp:3333 tcp:3333)
// Android com Emulador: 10.0.2.2 (android studio)
// Android com Emulador: 10.0.3.2 (Genymotion)
// Android com físico: IP da máquina