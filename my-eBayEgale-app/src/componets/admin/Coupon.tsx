import React, { useState, ChangeEvent, FormEvent } from 'react';
import './coupon.css'; // Import CSS file

const Coupon: React.FC = () => {
  const [generated, setGenerated] = useState<string[]>([]);
  const [length, setLength] = useState<number>(5); // State for coupon length
  const [count, setCount] = useState<number>(5); // State for number of codes
  const [possible, setPossible] = useState<string>("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789");

  const generateCodes = () => {
    const codes: string[] = [];
    for (let i = 0; i < count; i++) {
      codes.push(generateCode());
    }
    setGenerated(codes);
  };

  const generateCode = (): string => {
    let text = "";
    for (let i = 0; i < length; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  };

  const handleGenerate = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateCodes();
  };

  const scratchCoupon = (index: number) => {
    const newGenerated = [...generated];
    newGenerated[index] = "You get extra 20% discount";
    setGenerated(newGenerated);
  };

  return (
    <div className="coupon-generator">
      <form className="coupon-form" onSubmit={handleGenerate}>
        <h1 className="coupon-heading">Coupon Generator</h1>
        <input
          className="coupon-length"
          type="number"
          min="2"
          placeholder="How long your codes will be?"
          value={length}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setLength(parseInt(e.target.value))}
        />
        <input
          className="coupon-count"
          type="number"
          min="1"
          placeholder="How many code you want?"
          value={count}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setCount(parseInt(e.target.value))}
        />
        <input
          className="coupon-possible"
          type="text"
          placeholder="Possible characters"
          defaultValue="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setPossible(e.target.value)}
        />
        <button className="coupon-generate" type="submit">Generate</button>
      </form>
      <div className="coupon-list">
        {generated.map((coupon, index) => (
          <div className="coupon-item" key={index}>
            <span className="coupon-text">{coupon}</span>
            <button className="coupon-scratch" onClick={() => scratchCoupon(index)}>Scratch</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coupon;
