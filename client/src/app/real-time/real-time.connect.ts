import { RealTimeService } from './services/real-time.service';

export const realTimeConnect = (realTimeService: RealTimeService) => {
    realTimeService.open();
};
