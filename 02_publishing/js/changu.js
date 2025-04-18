
const conditionStyles = {
    "피곤함": { color: "#e0f7fa", face: "😵" },          // 기절 직전
    "귀찮음": { color: "#eeeeee", face: "🫠" },          // 녹아내림
    "우울함": { color: "#e1bee7", face: "😢" },          // 조용히 눈물
    "돈 없음": { color: "#fff3cd", face: "😭" },         // 오열 중
    "배고픔": { color: "#ffe0e0", face: "🤤" },          // 군침 쥬르륵
    "귀여움 인정 받고 싶음": { color: "#ffe4ec", face: "🥹" } // 찡긋 감성 귀염
};
  
function getChanguMessage(condition, menuType) {
    const filtered = changuDialogues.filter(
        (d) => d.condition === condition && d.menu_type === menuType
    );
    return filtered.length ? filtered[Math.floor(Math.random() * filtered.length)] : null;
}


function getRandomProduct(menuType) {
    const matches = productData.filter(p => p.tags.includes(menuType));
    return matches.length ? matches[Math.floor(Math.random() * matches.length)] : null;
}

function createChanguCard(data, product) {
    const card = document.createElement("div");
  
    // 🟣 한글 → 영어 클래스 매핑
    const conditionClassMap = {
      "피곤함": "tired",
      "귀찮음": "lazy",
      "우울함": "depressed",
      "돈 없음": "broke",
      "배고픔": "hungry",
      "귀여움 인정 받고 싶음": "cute"
    };
    const conditionClass = conditionClassMap[data.condition] || "neutral";
  
    // 🟣 클래스 설정
    card.classList.add("changu-card", "bounce", conditionClass);
  
    const face = document.createElement("div");
    face.className = "changu-face";
    face.innerText = conditionStyles[data.condition]?.face || "(•ᴗ•)";
  
    const meta = document.createElement("div");
    meta.className = "changu-meta";
    meta.innerText = `[${data.condition}] + [${data.menu_type}]`;
  
    const msg = document.createElement("div");
    msg.className = "changu-message shake";
    msg.innerText = data.message;
  
    card.appendChild(face);
    card.appendChild(meta);
    card.appendChild(msg);
  
    if (product) {
        const brandName = document.createElement("div");
        brandName.className = "changu-brand-name";

        const productName = document.createElement("div");
        productName.className = "changu-product-name mayo";
        productName.innerHTML = `추천 메뉴: ${product.name} <span class="product-brand"> (${product.brand})</span>`;
    
        const productPrice = document.createElement("div");
        productPrice.className = "changu-product-price";
        productPrice.innerText = `💸 가격: ${product.price.toLocaleString()}원`;
    
        const disclaimer = document.createElement("div");
        disclaimer.className = "changu-disclaimer";
        disclaimer.innerText = "*편의점 별 할인 적용이 상이할 수 있습니다.";
        
        card.appendChild(brandName);
        card.appendChild(productName);
        card.appendChild(productPrice);
        card.appendChild(disclaimer);
    }
  
    return card;
  }
  

const button = document.getElementById("recommendBtn");
button.addEventListener("click", () => {
// const condition = document.getElementById("condition").value;
// const menuType = document.getElementById("menuType").value;
const condition = document.querySelector('input[name="condition"]:checked').value;
const menuType = document.querySelector('input[name="menuType"]:checked').value;

const result = getChanguMessage(condition, menuType);
const product = getRandomProduct(menuType);

const safeResult = result || {
    condition,
    menu_type: menuType,
    message: "챙구가 아직 이 조합에 대한 말을 준비하지 못했어요. 내일은 꼭 말할 수 있도록 훈련시킬게요!"
};

const resultContainer = document.getElementById("result");
resultContainer.innerHTML = "";

const card = createChanguCard(safeResult, product);
resultContainer.appendChild(card);
});