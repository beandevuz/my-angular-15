import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ProconChatbotService {
    private readonly baseUrl =
        'https://apim-ps-bdo-bot.azure-api.net/bd-procon/v1/completion';
    private readonly token = '8505e48b966d4f31b1f0d33f2a12c982';

    constructor(private readonly http: HttpClient) {}

    chat(prompt: string) {
        const body = {
            messages: [
                {
                    role: 'user',
                    content: prompt,
                },
            ],
        };
        return this.http.post<any>(this.baseUrl, body, {
            headers: {
                'Content-Type': 'application/json',
                'Cache-Control': 'no-cache',
                'Ocp-Apim-Subscription-Key': this.token,
            },
        });
    }

    getDog() {
        return this.http.get('https://dog.ceo/api/breeds/image/random');
    }
}
