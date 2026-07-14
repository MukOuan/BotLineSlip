function generateTransactionsLinkFlex(url) {
  const bubble = {
    type: 'bubble',
    size: 'kilo',
    body: {
      type: 'box',
      layout: 'vertical',
      paddingAll: '20px',
      spacing: 'md',
      contents: [
        {
          type: 'text',
          text: '📋 รายการทั้งหมด',
          size: 'lg',
          weight: 'bold',
          color: '#0F172A',
        },
        {
          type: 'text',
          text: 'กดปุ่มด้านล่างเพื่อดูรายรับ-รายจ่ายทั้งหมด แบบเลื่อนดูได้',
          size: 'sm',
          color: '#64748B',
          wrap: true,
          margin: 'sm',
        },
      ],
    },
    footer: {
      type: 'box',
      layout: 'vertical',
      paddingAll: '16px',
      contents: [
        {
          type: 'button',
          style: 'primary',
          color: '#0F172A',
          height: 'md',
          action: {
            type: 'uri',
            label: 'เปิดดูรายการทั้งหมด',
            uri: url,
          },
        },
      ],
    },
  };

  return {
    type: 'flex',
    altText: 'ดูรายการทั้งหมด',
    contents: bubble,
  };
}

module.exports = { generateTransactionsLinkFlex };