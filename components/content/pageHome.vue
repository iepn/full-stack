<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as d3 from "d3";
const colorMode = useColorMode()

const force = ref(null);
let simulation, node, link;

onMounted(() => {
  const width = 1600;
  const height = 1600;

  const svg = d3
    .select(force.value)
    .append("svg")
    .attr("width", width)
    .attr("height", height)
    .on("click", () => {
      node.style("fill", "steelblue");
    });

  const nodes = [];
  for (let i = 1; i <= 10; i++) {
    nodes.push({
      id: i,
      x: Math.random() * 900,
      y: Math.random() * 900,
    });
  }

  const links = [];
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      links.push({ source: nodes[i].id, target: nodes[j].id });
    }
  }

  node = svg
    .selectAll(".node")
    .data(nodes)
    .enter()
    .append("circle")
    .attr("r", 3)
    .attr("fill", "blue");

  simulation = d3
    .forceSimulation(nodes)
    .force("charge", d3.forceManyBody().strength(6200))
    .force(
      "link",
      d3
        .forceLink(links)
        .id((d) => d.id)
        .distance(900)
    )
    .force("center", d3.forceCenter(width / 2, height / 2))
    .on("tick", ticked);

  simulation.alphaDecay(0).restart();
  simulation.alphaMin(0.001).restart();

  link = svg
    .selectAll(".link")
    .data(links)
    .enter()
    .append("line")
    .attr("stroke", "#DDDDDD")
    .attr("stroke-width", 1);

  function ticked() {
    link
      .attr("x1", (d) => d.source.x)
      .attr("y1", (d) => d.source.y)
      .attr("x2", (d) => d.target.x)
      .attr("y2", (d) => d.target.y);

    node.attr("cx", (d) => d.x).attr("cy", (d) => d.y);
  }
});

const links = ref([
  { name: "Github", href: "https://github.com/iepn", separator: " + " },
  { name: "Hackerone", href: "https://hackerone.com/iepn", separator: " + " },
  { name: "Behance", href: "https://www.behance.net/1ui", separator: " ÷ " },
  {
    name: "Researchgate",
    href: "https://www.researchgate.net/profile/Rhyme-Qing",
  },
]);
</script>

<template>
  <main>
    <div class="data" ref="force"></div>
    <div class="nav">
      <div class="title">
        <div class="title-text">
          <an-title
            url="/dev"
            title="Originality is <br />key to infusing a work with soul."
          />
        </div>
        <div class="link">
          <span v-for="item in links" :key="item.href">
            <a :href="item.href" target="_blank">{{ item.name }}</a>
            {{ item.separator }}
          </span>
        </div>
      </div>
      <div class="copyright">
        <div class="copy-link">
          <a href="/about">about</a>
          <a href="/link">Link</a>
          <a href="/rss.xml">RSS</a>
          <a href="/sitemap.xml">Sitemap</a>
        </div>
        <p>
          Creative Commons Attribution 4.0 International License (CC BY 4.0) and
          the MIT License
        </p>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro:ital,wght@0,200..900;1,200..900&display=swap");
.dark-mode main {
    background: rgb(0, 0, 0);
    .data {
        opacity: 0.13 !important;
    }
}
.nav {
  position: absolute;
  top: 5vh;
  bottom: 0;
  left: 5vw;
  font-family: "Source Code Pro", monospace;
  .title {
    line-height: 3;
    transform: translateY(30vh);
    .title-text {
      display: block;
      cursor: pointer;
      color: #d6d6d6;
      font-size: 3vh;
      font-weight: 300;
      line-height: initial;
      padding: 0;
      margin: 0;
    }
  }
  .link {
    padding: 0;
    margin: 0;
    text-transform: capitalize;
    color: #b7b7b7;
    margin-top: 1vh;
    line-height: 1.3;
    font-size: 1.7vh;
    margin-left: 2.5vh;
    a {
      text-decoration: none;
      color: #b7b7b7;
      padding-left: 3px;
      padding-right: 3px;
      transition: color 0.3s ease;
      &:hover {
        color: #1c0000;
        text-transform: none;
        text-decoration: none;
      }
      .dark-mode &:hover {
        color: #757575;
      }
    }
  }
}

.copyright {
  position: absolute;
  bottom: 10px;
  color: #a1a1a1;
  font-size: 1vh;
  line-height: 1;
  .copy-link {
    a {
      text-decoration: none;
      text-transform: capitalize !important;
      color: #b7b7b7;
      padding-right: 10px;
      transition: color 0.3s ease;
      &:hover {
        color: #1c0000;
        text-transform: none;
        text-decoration: none;
      }
      .dark-mode &:hover {
        color: #757575;
      }
    }
  }
}

.data {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  max-width: 100vw;
  max-height: 100vh;
  overflow: hidden;

  .data svg {
    max-height: 100vh;
    max-width: 100vh;
    overflow: hidden;
  }
}
</style>
