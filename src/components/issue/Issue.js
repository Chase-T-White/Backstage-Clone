import React from "react";
import "./issue.css";

const Issue = ({ id, title, img, soldOut, textColor }) => {
  return (
    <section className='issue' id={`${id}`}>
      <img src={img} alt={`Cover of ${title}`} loading='lazy' />
      {soldOut ? (
        <div className='issue__text'>
          <h4>{title} is sold out.</h4>
          <p>
            If you are lucky, you may get the last pieces in{" "}
            <a style={{ color: textColor }} className='hover-underline'>
              selected stores.
            </a>
          </p>
        </div>
      ) : (
        <div className='issue__text'>
          <h4>{title}</h4>
          <p>
            <a style={{ color: textColor }} className='hover-underline'>
              Buy Here
            </a>
          </p>
          <p>
            {" "}
            or in{" "}
            <a style={{ color: textColor }} className='hover-underline'>
              selected stores.
            </a>
          </p>
        </div>
      )}
    </section>
  );
};

export default Issue;
