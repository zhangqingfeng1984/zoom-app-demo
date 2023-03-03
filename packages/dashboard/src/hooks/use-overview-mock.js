import { useState } from 'react';
import {mock} from 'mockjs';

export const useOverviewCards = () => {
    const [meetings, setMeetings] = useState("24k")
    const [participants, setParticipants] = useState('1.6k')
    const [developerPercentage, setDeveloperPercentage] = useState(75.5);
    const [totalCost, setTotalCost] = useState("$15k")
    const [meetingCostThisYear, setMeetingCostThisYear] = useState([18, 16, 5, 8, 3, 14, 14, 16, 17, 19, 18, 20]);
    const [meetingCostLastYear, setMeetingCostLastYear] = useState([12, 11, 4, 6, 2, 9, 9, 10, 11, 12, 13, 13]);
    const [roleOfParticipants, setRoleOfParticipants] = useState([63, 15, 22])
    const [clevelCost, setClevelCost] = useState(mock({
        'data|6': [{
          id: '@string(8)',
          'ref|1000-2000': 1000,
          'cost|100-500.2-2': 100.25,
          'clevel|1':['C11','C9','C12','C13'],
          customer: {
            name: '@name'
          },
          createdAt: '@date',
          'status|1': ['Online','Offline']
        }]
      }).data)
    return {
        meetings, setMeetings,
        participants, setParticipants,
        developerPercentage, setDeveloperPercentage,
        totalCost, setTotalCost,
        meetingCostThisYear, setMeetingCostThisYear,
        meetingCostLastYear, setMeetingCostLastYear,
        roleOfParticipants, setRoleOfParticipants,
        clevelCost, setClevelCost
    }
}