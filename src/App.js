import { useState, useEffect, createContext } from "react";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import profileService from "./services/card.service";

import Navbar from "./components/Navbar";

import Cards from "./pages/Cards";
import SavedCards from "./pages/SavedCards";
import DeleteCards from "./pages/DeleteCards";

export const ProfilesContext = createContext();

function App() {
	const [cardList, setCardsList] = useState(null);
	const [savedCardList, setSavedCardList] = useState([]);

	const getAllCards = () => {
		profileService.getAll().then((data) => {
			console.log(data.data.results);
			setCardsList(data.data.results.sort((a, b) => a.dob.age - b.dob.age));
		});
	};

	const saveCard = (id) => {
		const cardToSave = cardList.find((card) => card.login.uuid === id);
		const cardIndex = cardList.findIndex((card) => card.login.uuid === id);
		const tempCardList = [...cardList];
		tempCardList[cardIndex].saved = true;
		setCardsList(tempCardList);
		setSavedCardList((cards) => [...cards, { ...cardToSave, saved: true }]);
	};

	const deleteCard = (id) => {
		setCardsList(cardList.filter((card) => card.login.uuid !== id));
	};

	useEffect(() => {
		getAllCards();
	}, []);

	return (
		<ProfilesContext.Provider value={getAllCards}>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route exact path="/" element={<Navigate to="/cards" />} />
					<Route
						exact
						path="/cards"
						element={<Cards cardList={cardList} saveCard={saveCard} deleteCard={deleteCard} />}
					/>
					<Route
						exact
						path="/saved"
						element={<SavedCards savedCardList={savedCardList} deleteCard={deleteCard} />}
					/>
					<Route exact path="/delete" element={<DeleteCards cardList={cardList} deleteCard={deleteCard} />} />
				</Routes>
			</BrowserRouter>
		</ProfilesContext.Provider>
	);
}

export default App;
