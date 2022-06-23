import Card from "../components/Card";

const Cards = ({ cardList, saveCard, deleteCard }) => {
	return Array.isArray(cardList) && cardList?.length > 0 ? (
		<div className="container p-50">
			<h1 className="cards-title">Cards</h1>
			<main className="grid">
				{cardList !== null &&
					cardList.map((card) => (
						<Card key={card.login.uuid} card={card} saveCard={saveCard} deleteCard={deleteCard} />
					))}
			</main>
		</div>
	) : (
		<h1 className="page-title">No Cards</h1>
	);
};

export default Cards;
