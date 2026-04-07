function generateOutfit() {
    const occasion = document.getElementById("occasion").value;
    const style = document.getElementById("style").value;
    const color = document.getElementById("color").value;

    let outfitText = `${style} ${occasion} Look`;
    let description = `A ${color} outfit in ${style} style, perfect for ${occasion}.`;

    let image = "";

    if (style === "Streetwear") {
        image = "https://images.unsplash.com/photo-1523398002811-999ca8dec234";
    } else if (style === "Elegant") {
        image = "https://images.unsplash.com/photo-1490481651871-ab68de25d43d";
    } else {
        image = "https://images.unsplash.com/photo-1512436991641-6745cdb1723f";
    }

    document.getElementById("result").innerHTML = `
        <h2>${outfitText}</h2>
        <p>${description}</p>
        <img src="${image}" width="250" style="border-radius:10px; margin-top:10px;">
    `;
}