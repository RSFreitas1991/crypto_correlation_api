import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { QueueService } from './queue.service';
import { Queue, Job, JobType } from 'bullmq';

@Controller('queue')
export class QueueController {
  constructor(private readonly queueService: QueueService) {}

  @Post('add-job')
  async addJob(
    @Body() addJobDTO: { name: string; data: any },
  ): Promise<String> {
    const jobAdded = await this.queueService.addJob(
      addJobDTO.name,
      addJobDTO.data,
    );
    console.log(jobAdded);
    return 'Job added to queue';
  }

  @Get('job-counts')
  async getJobCounts() {
    const counts = await this.queueService.getJobCounts();
    return counts;
  }

  @Get('job/:id')
  async getJob(@Param('id') id: string) {
    const job = await this.queueService.getJob(id);
    return job;
  }

  @Get('jobs/:state')
  async getJobs(@Param('state') state: string) {
    const jobState = state as JobType;
    const jobs = await this.queueService.getJobs(jobState);
    return jobs;
  }
}
