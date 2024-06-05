import {useState, useEffect } from 'react';
import address from '../data/address.json'

export default function LocationSel() {
    // const [address, setAddress] = useState([]);
    const [largeCategories, setLargeCategories] = useState([]);
    const [selectedLarge, setSelectedLarge] = useState('');
    const [mediumCategories, setMediumCategories] = useState([]);
    const [selectedMedium, setSelectedMedium] = useState('');
    const [selectedSmall, setSelectedSmall] = useState('');
    const [smallCategories, setSmallCategories] = useState([]);


  useEffect(() => {
    let tm = address.map(item => item.sido);
    tm = new Set(tm) ;
    tm = [...tm] ;
    setLargeCategories(tm)
    console.log("tdata tm => ", tm) 
  } , []);

  const handleLargeChange = (e) => {
    const selected = e.target.value;
    setSelectedLarge(selected);
    const filteredMediums = address.filter(item => item.sido === selected).map(item => item.gugun);
    console.log(filteredMediums)
    setMediumCategories([...new Set(filteredMediums)]);
    setSelectedMedium('');
    setSmallCategories([]);
  };

  const handleMediumChange = (e) => {
    const selected = e.target.value;
    setSelectedMedium(selected);
    const filteredSmalls = address.filter(item => item.sido === selectedLarge && item.gugun === selected).map(item => item.eupmyeondong);
    setSmallCategories([...new Set(filteredSmalls)]);
  };

  const handleSmallChange = (e) => {
    const selected = e.target.value;
    setSelectedSmall(selected);
  };
  return (
    <div className="flex justify-between items-center">      
    <h1>주소를 선택하세요</h1>
    <div className="text-lg">
      <label>
        시/도
        <select value={selectedLarge} onChange={handleLargeChange}>
          <option value="" disabled>선택하세요.</option>
          {largeCategories.map((sido, region_id) => (
            <option key={region_id} value={sido}>
              {sido}
          </option>
          ))}
        </select>
      </label>
    </div>

    {mediumCategories.length > 0 && (
      
  <div className="text-lg">
    <label>
          구/군
          <select value={selectedMedium} onChange={handleMediumChange}>
            <option value="" disabled>선택하세요.</option>
            {mediumCategories.map((gugun, region_id) => (
              <option key={region_id} value={gugun}>
                {gugun}
              </option>
            ))}
          </select>
        </label>
      </div>
    )}

    {smallCategories.length > 0 && (
      <div className="text-lg">
        <label>
          읍/면/동
          <select value={selectedSmall} onChange={handleSmallChange}>
            <option value="" disabled>선택하세요.</option>
            {smallCategories.map((eupmyeondong, region_id) => (
              <option key={region_id} value={eupmyeondong}>
                {eupmyeondong}
              </option>
            ))}
          </select>
        </label>
      </div>
    )}
  </div>
)
}
