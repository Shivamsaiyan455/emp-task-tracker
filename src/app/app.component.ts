import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
Employee_Name = '';
  Task_Title = '';
  Priority = '';
  Due_Date = '';

  tasks: any[] = [];

  minDate: string = new Date().toISOString().split('T')[0]; // Prevent selecting past dates

  submittask() {
    const today = new Date();
    const selectedDate = new Date(this.Due_Date);

    // Remove time for accurate comparison
    today.setHours(0, 0, 0, 0);
    selectedDate.setHours(0, 0, 0, 0);

    if (this.Employee_Name && this.Task_Title && this.Priority && this.Due_Date) {
      if (selectedDate < today) {
        alert('Due Date cannot be in the past');
        return;
      }

      const task = {
        Employee_Name: this.Employee_Name,
        Task_Title: this.Task_Title,
        Priority: this.Priority,
        Due_Date: this.Due_Date
      };

      this.tasks.push(task);

      // Reset fields
      this.Employee_Name = '';
      this.Task_Title = '';
      this.Priority = '';
      this.Due_Date = '';

      alert("Task submitted successfully");
    } else {
      alert('Please fill all fields');
    }
  }

  getPriorityClass(priority: string): string {
    if (priority === 'Low') {
      return 'low';
    } else if (priority === 'Medium') {
      return 'medium';
    } else if (priority === 'High') {
      return 'high';
    } else {
      return '';
    }
  }
  completeTask(index: number) {
  this.tasks.splice(index, 1); // remove task at given index
}

}

