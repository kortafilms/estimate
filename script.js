function calculate() {
  const content = document.getElementById("content").value;
  const duration = document.getElementById("duration").value;
  const editing = document.getElementById("editing").value;
  const sns = document.getElementById("sns").value;

  const basePrices = {
    '写真': {
      '約1時間': 10000,
      '約2時間': 17000,
      '3~4時間': 24000,
      '半日(約8時間)': 32000
    },
    '動画': {
      '約1時間': 16000,
      '約2時間': 24000,
      '3~4時間': 32000,
      '半日(約8時間)': 42000
    },
    '写真と動画': {
      '約1時間': 21000,
      '約2時間': 29000,
      '3~4時間': 38000,
      '半日(約8時間)': 49000
    }
  };

  let price = basePrices[content][duration];

  // 編集なしの割引
  if (editing === '編集なし(LOG素材データのみ)') {
    if (content === '写真') price *= 0.8;
    else if (content === '動画') price *= 0.6;
    else if (content === '写真と動画') price *= 0.75;
  }

  // SNS OK の割引
  if (sns === 'OK') {
    price *= 0.9;
  }

  document.getElementById("price").innerText = `見積もり金額: ¥${Math.round(price).toLocaleString()}`;
}
