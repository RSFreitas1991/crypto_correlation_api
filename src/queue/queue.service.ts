import { Injectable } from '@nestjs/common';
import { InjectQueue } from '@nestjs/bullmq';
import { Queue, Job, JobType } from 'bullmq';

@Injectable()
export class QueueService {
  constructor(@InjectQueue('my-queue') private readonly myQueue: Queue) {}

  async addJob(name: string, data: any) {
    await this.myQueue.add(name, data);
  }

  async getJobCounts() {
    const counts = await this.myQueue.getJobCounts();
    return counts;
  }

  async getJob(id: string): Promise<Job | null> {
    const job = await this.myQueue.getJob(id);
    return job;
  }

  async getJobs(state: JobType): Promise<Job[]> {
    const jobs = await this.myQueue.getJobs([state]);
    return jobs;
  }
}
