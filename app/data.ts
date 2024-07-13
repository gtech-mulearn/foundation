export interface Status {
    id:Number
    level:Number
    lock:boolean
  }

  export const status: Status[] = [
    {
      id: 1,
      level: 1,
      lock:false
    },
    {
      id: 2,
      level: 2,
      lock: true
    },
    {
      id: 3,
      level: 3,
      lock: true
    },
    {
      id: 4,
      level: 4,
      lock:true
    }
  ];