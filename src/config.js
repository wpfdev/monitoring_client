export const isProduction = process.env.NODE_ENV === 'production';

export const dateLocaleOptions = {
	year: 'numeric',
	month: 'long',
	day: 'numeric',
	hour: 'numeric',
	minute: 'numeric'
};

export const apiUrl = isProduction ? "http://localhost:8000/api" : "http://localhost:8000/api";
