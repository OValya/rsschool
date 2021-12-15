import './start-page.css';
import './settings-page.css';
import Application from './application/newApp'
import CheckForm from './components/checkbox-form';
import CheckList from './components/checkbox-list';
import FilterBlock from './components/filter-block';
import {ToysData} from './dataModel';
import toysDataUrl from './toys-data.json'
import Card from './components/card'
import CardBox from './components/card-box'

const page = new Application(document.body);
//const check = new CheckForm({ parentNode: document.body, type: 'ball' });
/*
const forms = ['ball', 'bell', 'toy', 'snowflake', 'cone'];
const color = ['white', 'red', 'blue', 'yellow', 'green'];
const size = ['big', 'medium', 'small'];
const favorite = ['favorite'];

const formFilter = new CheckList(document.body, 'Форма:', 'form', forms);
const colorFilter = new CheckList(document.body, 'Цвет:', 'color', color);
const sizeFilter = new CheckList(document.body, 'Размер:', 'size', size);
const favoriteFilter = new CheckList(document.body, 'Только любимые:', 'favorite', favorite);

let arrayOfFilter: Array<CheckList> = [formFilter, colorFilter, sizeFilter, favoriteFilter];
const filterByValue = new FilterBlock(document.body, 'Фильтр по значению', arrayOfFilter)

const data = new ToysData();
data.build().then(result => {
  new CardBox(document.body,  result.data)
});

*/