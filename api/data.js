const N8N_WEBHOOK = process.env.N8N_WEBHOOK_URL || 'https://esencia-paradise-n8n.rh6pum.easypanel.host/webhook-test/57d0cee4-88e8-4b93-8bc5-2f1644d93f72';

module.exports = async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  try {
    const response = await fetch(N8N_WEBHOOK);
    if (!response.ok) throw new Error(`n8n responded with ${response.status}`);
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
