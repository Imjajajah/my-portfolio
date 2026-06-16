import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

const ProjectCard = (props) => {
  return (
    <Card
      className={`project-card-view${props.isFeatured ? " featured-card" : ""}`}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignContent: "space-between",
      }}
    >
      {props.isFeatured && (
        <div className="featured-ribbon">
          <span>⭐ Enterprise</span>
        </div>
      )}
      <Card.Img
        variant="top"
        src={props.imgPath}
        alt="card-img"
        style={{
          height: props.isFeatured ? "260px" : "200px",
          objectFit: "cover",
          alignSelf: "flex-start",
          borderRadius: "8px 8px 0 0",
        }}
      />
      <Card.Body
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          alignContent: "space-between",
        }}
      >
        <Card.Title style={{ fontSize: props.isFeatured ? "1.2em" : "1em" }}>
          {props.title}
        </Card.Title>
        <Card.Text style={{ textAlign: "justify", fontSize: "14px" }}>
          {props.description}
        </Card.Text>

        {props.ghLink && props.ghLink !== "#" && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {props.ghLink === "#" && props.isFeatured && (
          <Button
            variant="primary"
            disabled
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              opacity: 0.65,
              cursor: "not-allowed",
            }}
          >
            🔒 &nbsp; Private / Client Repo
          </Button>
        )}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{
              marginTop: "10px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
            }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
