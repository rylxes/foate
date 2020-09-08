import { useState, useEffect, useRef } from "react";

export default function Modal({ investor, updateModal, closeModal }) {
  const selectRef = useRef();
  const [currentInvestor, setCurrentInvestor] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setCurrentInvestor(investor);
  });

  const onSave = async (e) => {
    e.preventDefault();
    if(selectRef.current.value !== ''){
      setLoading(true);

      setTimeout(()=>{
        updateModal({ ...currentInvestor, tier: selectRef.current.value });
        setCurrentInvestor({});
        selectRef.current.value = '';
        setLoading(false) 
      }, 1000);
    }
  };

  const { firstName, lastName, email, tier, address } = currentInvestor;

  return (
    <div className="modalBg__content">
      <div className="modalBg__content-text">
        <h4>
          Name: {firstName} {lastName}
        </h4>
        <div className="desc">
          <strong>Email:</strong> {email}
        </div>

        <div className="desc">
          <strong>Address:</strong> {address}
        </div>

        <div className="desc">
          <strong>Tier:</strong> {tier}
        </div>

        <hr />

        <form onSubmit={onSave}>
          <div className="contact__form-group">
            <label htmlFor="tier" style={{ color: "skyblue" }}>
              Update Investor Tier
            </label>
            <select
              name="tier"
              id="tier"
              className="contact__form-input"
              ref={selectRef}
            >
              <option value="">Assign an investment tier</option>
              <option value="starter">Starter</option>
              <option value="stake">Stake</option>
              <option value="slice">Slice</option>
            </select>
          </div>
        </form>

        <div className="navs">
          <button className="btnSmall btn-green" onClick={onSave}>
            {loading ? <i className="fa fa-spinner fa-spin"></i> : "Update"}
          </button>
          <button className="btnSmall btn-red" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
