import { ProconChatbotService } from './procon-chatbot.service';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'procon-chatbot',
    templateUrl: './procon-chatbot.component.html',
    styleUrls: ['./procon-chatbot.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProconChatbotComponent implements OnInit {
    constructor(private readonly proconChatbotService: ProconChatbotService) {}

    ngOnInit(): void {
        this.proconChatbotService.chat('Hi').subscribe((res) => {
            console.log(res);
        });

        this.proconChatbotService.getDog().subscribe();
    }
}
