import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { CoursesService } from '../services/courses.service';

@Component({
  selector: "app-list",
  templateUrl: "./list.page.html",
  styleUrls: ["./list.page.scss"]
})
export class ListPage implements OnInit {
  username: string;
  courses: any;
  constructor(private courseService: CoursesService,private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.username = this.activatedRoute.snapshot.paramMap.get("name");

    this.courseService.getAll().subscribe(
      (data) => {
        this.courses = data;       
        console.log(data);
      }, (err) => {
        console.log(err);
      }
    )
  }

  goToDetail(course:any){
      this.router.navigate(['detail'], {queryParams: course});
  }
}
