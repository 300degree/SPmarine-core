import { WaterStatusType } from '@types';
import { Barge } from '@entities/Barge';

export const mockBarges: Barge[] = [
    {
        id: "b1",
        weight: 500,
        cap: 2500,
        last: 13.1884842845227,
        long: 100.81514283237,
        waterStatus: WaterStatusType.SEA,
        name: 'barge1',
        station: 'c1',
        kilometer: 0,
        setupTime: 0,
        readyDateTime: new Date('2025-01-10 08:00:00')
    },
    {
        id: "b2",
        weight: 500,
        cap: 3000,
        last: 13.1884842845227,
        long: 100.81514283237,
        waterStatus: WaterStatusType.SEA,
        name: 'barge2',
        station: 'c1',
        kilometer: 0,
        setupTime: 0,
        readyDateTime: new Date('2025-01-10 08:00:00')
    },
    {
        id: "b3",
        weight: 500,
        cap: 2500,
        last: 13.1884842845227,
        long: 100.81514283237,
        waterStatus: WaterStatusType.SEA,
        name: 'barge3',
        station: 'c1',
        kilometer: 0,
        setupTime: 0,
        readyDateTime: new Date('2025-01-10 08:00:00')
    },
    {
        id: "b4",
        weight: 500,
        cap: 2500,
        last: 13.1884842845227,
        long: 100.81514283237,
        waterStatus: WaterStatusType.SEA,
        name: 'barge4',
        station: 'c1',
        kilometer: 0,
        setupTime: 0,
        readyDateTime: new Date('2025-01-10 08:00:00')
    },
    {
        id: "b5",
        weight: 500,
        cap: 3000,
        last: 13.1884842845227,
        long: 100.81514283237,
        waterStatus: WaterStatusType.SEA,
        name: 'barge5',
        station: 'c1',
        kilometer: 0,
        setupTime: 0,
        readyDateTime: new Date('2025-01-10 08:00:00')
    },
];

export const mockBargesForNotEqual: Barge[] = [
    {
        id: "b1",
        weight: 500,
        cap: 2500,
        last: 13.1884842845227,
        long: 100.81514283237,
        waterStatus: WaterStatusType.SEA,
        name: 'barge1',
        station: 'c1',
        kilometer: 0,
        setupTime: 0,
        readyDateTime: new Date('2025-01-10 08:00:00')
    },
    {
        id: "b2",
        weight: 500,
        cap: 3000,
        last: 13.1884842845227,
        long: 100.81514283237,
        waterStatus: WaterStatusType.SEA,
        name: 'barge2',
        station: 'c1',
        kilometer: 0,
        setupTime: 0,
        readyDateTime: new Date('2025-01-10 08:00:00')
    }
];
