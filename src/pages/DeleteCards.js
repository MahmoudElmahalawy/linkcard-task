import Card from "../components/Card";

const DeleteCards = ({ cardList, deleteCard }) => {
	return Array.isArray(cardList) && cardList?.length > 0 ? (
		<div className="container p-50">
			<h1 className="cards-title">Delete Cards</h1>
			<main className="grid">
				{cardList !== null &&
					cardList.map((card) => (
						<Card key={card.login.uuid} card={card} deleteCard={deleteCard} listType="delete" />
					))}
			</main>
		</div>
	) : (
		<h1 className="page-title">No cards to delete</h1>
	);
};

export default DeleteCards;
