import Card from "../components/Card";

const SavedCards = ({ savedCardList, deleteCard }) => {
	return Array.isArray(savedCardList) && savedCardList?.length > 0 ? (
		<div className="container p-50">
			<h1 className="cards-title">Saved Cards</h1>
			<main className="grid">
				{savedCardList !== null &&
					savedCardList.map((card) => <Card key={card.login.uuid} card={card} deleteCard={deleteCard} />)}
			</main>
		</div>
	) : (
		<h1 className="page-title">No Saved Cards</h1>
	);
};

export default SavedCards;
