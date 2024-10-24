function rollDice()
{
    const num = document.getElementById("input_id").value;
    const Result = document.getElementById("diceResult");
    const Image = document.getElementById("diceImage");
    const values = [];
    const images = [];
    for(let i = 0;i<num;i++)
    {
        const value = Math.floor(Math.random()*6) + 1;
        values.push(value);
        images.push(`<img src="Dice_image/${value}.png">`);
    }
    Result.textContent = `Dice: ${values.join(', ')}`;
    Image.innerHTML = images.join('');
}