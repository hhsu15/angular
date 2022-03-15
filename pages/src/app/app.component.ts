import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentPage = 0;
  images = [
    {
      title: 'At the beach',
      url: 'https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60'
    },
    {
      title: 'Dog',
      url: 'https://media.istockphoto.com/photos/furry-dog-smiling-with-tongue-out-picture-id1287452200?b=1&k=20&m=1287452200&s=170667a&w=0&h=1XDHJ1DNyzoZ1fellkNKHhmmORqx2Oqt-PSSFJ4eS50='
    },
    {
      title: 'Computer',
      url: 'https://images.unsplash.com/photo-1640622660721-45b83554ab05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8Y29tcHV0ZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60'
    },
    {
      title: 'Mountain',
      url: 'https://images.unsplash.com/photo-1454496522488-7a8e488e8606?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bW91bnRhaW58ZW58MHx8MHx8&auto=format&fit=crop&w=1400&q=60'
    }
  ];

  checkWindowIndex(index: number) {
    return Math.abs(this.currentPage - index) < 5;
  }

  // onChangePage(pageNum: number) {
  //   this.currentPage = pageNum;
  // }
}
