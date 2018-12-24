let mockData={
  "isSuccess": true,
    "errorCode": 0,
      "errorMsg": null,
        "result": {
    "courseSeries": [
      {
        "date": "2018-12-24T00:00:00",
        "trainings": [
          {
            "id": 0,
            "duration": 90,
          
          },
          {
            "id": 0,
            "startTime": "2018-12-24T15:00:00",
            "duration": 60,
            "total": 0,
            "bookedNumber": 0
          },
          {
            "id": 0,
            "startTime": "2018-12-24T16:00:00",
            "duration": 60,
            "total": 0,
            "bookedNumber": 0
          }
        ]
      },
      {
        "date": "2018-12-25T00:00:00",
        "trainings": [
          {
            "id": 0,
            "startTime": "2018-12-25T08:00:00",
            "duration": 120,
            "total": 0,
            "bookedNumber": 0
          },
          {
            "id": 0,
            "startTime": "2018-12-25T08:00:00",
            "duration": 90,
            "total": 0,
            "bookedNumber": 0
          },
          {
            "id": 0,
            "startTime": "2018-12-25T10:00:00",
            "duration": 90,
            "total": 0,
            "bookedNumber": 0
          },
          {
            "id": 0,
            "startTime": "2018-12-25T12:00:00",
            "duration": 120,
            "total": 0,
            "bookedNumber": 0
          },
          {
            "id": 0,
            "startTime": "2018-12-25T16:00:00",
            "duration": 120,
            "total": 0,
            "bookedNumber": 0
          }
        ]
      },
      {
        "date": "2018-12-26T00:00:00",
        "trainings": [
          {
            "id": 0,
            "startTime": "2018-12-26T08:00:00",
            "duration": 120,
            "total": 0,
            "bookedNumber": 0
          },
          {
            "id": 0,
            "startTime": "2018-12-26T10:00:00",
            "duration": 120,
            "total": 0,
            "bookedNumber": 0
          },
          {
            "id": 0,
            "startTime": "2018-12-26T14:00:00",
            "duration": 120,
            "total": 0,
            "bookedNumber": 0
          },
          {
            "id": 0,
            "startTime": "2018-12-26T16:00:00",
            "duration": 120,
            "total": 0,
            "bookedNumber": 0
          }
        ]
      },
      {
        "date": "2018-12-27T00:00:00",
        "trainings": []
       
      },
      {
        "date": "2018-12-28T00:00:00",
        "trainings": []
       
      },
      {
        "date": "2018-12-29T00:00:00",
        "trainings": []
       
      },
      {
        "date": "2018-12-30T00:00:00",
        "trainings": []
      }
    ]
  }
};
function getCachList() {
  return mockData;
}
module.exports = {
  listData: getCachList,
}