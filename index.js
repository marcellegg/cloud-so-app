const express = require('express');
const cors = require('cors');
const os = require('os');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint da API que retorna informações do SO
app.get('/api/sysinfo', (req, res) => {
  const cpus = os.cpus();
  const totalMem = os.totalmem();
  const freeMem = os.freemem();
  const usedMem = totalMem - freeMem;
  const uptimeSeconds = os.uptime();

  const hours = Math.floor(uptimeSeconds / 3600);
  const minutes = Math.floor((uptimeSeconds % 3600) / 60);
  const seconds = Math.floor(uptimeSeconds % 60);

  res.json({
    hostname: os.hostname(),
    platform: os.platform(),
    arch: os.arch(),
    release: os.release(),
    cpuCount: cpus.length,
    cpuModel: cpus[0]?.model || 'N/A',
    totalMemGB: (totalMem / 1024 / 1024 / 1024).toFixed(2),
    freeMemGB: (freeMem / 1024 / 1024 / 1024).toFixed(2),
    usedMemGB: (usedMem / 1024 / 1024 / 1024).toFixed(2),
    memUsagePercent: ((usedMem / totalMem) * 100).toFixed(1),
    uptime: `${hours}h ${minutes}m ${seconds}s`,
    nodeVersion: process.version,
    environment: process.env.NODE_ENV || 'local',
    timestamp: new Date().toLocaleString('pt-BR')
  });
});

app.listen(PORT, () => {
  console.log(`✅ Servidor rodando em http://localhost:${PORT}`);
});
