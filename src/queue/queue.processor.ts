import { Processor, WorkerHost } from '@nestjs/bullmq';

@Processor('my-queue')
export class QueueProcessor extends WorkerHost {
  async process(job) {
    console.log('Processing job:', job.name, job.data);
    // Add your job processing logic here
  }
}
