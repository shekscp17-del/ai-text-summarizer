function generateOutfit() {
  const occasion = document.getElementById("occasion").value;
  const style = document.getElementById("style").value;
  const color = document.getElementById("color").value;

  let outfitTitle = `${style} ${occasion} Look`;
  let description = `A ${color.toLowerCase()} outfit in a ${style.toLowerCase()} style, perfect for ${occasion.toLowerCase()} occasions.`;

  let image = "";

  if (style === "Streetwear") {
    image = "https://images.unsplash.com/photo-1523398002811-999ca8dec234?auto=format&fit=crop&w=800&q=80";
  } else if (style === "Elegant") {
    image = "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80";
  } else {
    image = "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80";
  }

  document.getElementById("result").innerHTML = `
    <h2>${outfitTitle}</h2>
    <p>${description}</p>
    <img src="${image}" alt="${outfitTitle}">
  `;
}