import React from "react";


const SessionCard = props => {
  return (
    <div className="cards">
      <section className="cards-content">
        <picture></picture>
        <h3>
          Title: <span className="">{props.session.title}</span>
        </h3>
        <h3>Date: {props.session.date}</h3>
        <h3>Time: {props.session.time}</h3>
      </section>

      <button type="button"
        onClick={() => props.history.push(`/session/${props.session.id}/edit`)}>
        Edit
     </button>
    </div>
  );
};
export default SessionCard;

