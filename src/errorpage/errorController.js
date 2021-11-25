import render from './errorView';

export default function showErrorScreen(error) {
    render(error.message);
}