const Card = ({ card, saveCard, deleteCard, listType }) => {
	return (
		<div className="card">
			<div className="card-title"></div>
			<div className="card-details">
				<h2>{`${card.name.first}\n${card.name.last}`.toUpperCase()}</h2>
				<h3>{card.gender}</h3>
				<p>{card.dob.age} years</p>
				<p className="card-email">{card.email}</p>
			</div>
			<div className="card-actions">
				{listType === "delete" ? null : (
					<button className="btn-save" onClick={() => saveCard(card.login.uuid)} disabled={card.saved}>
						Save
					</button>
				)}
				<button className="btn-delete" onClick={() => deleteCard(card.login.uuid)}>
					Delete
				</button>
			</div>
		</div>
	);
};

export default Card;
