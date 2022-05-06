import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormControlLabel,
  FormLabel,
  Grid,
  Slider,
  Tooltip,
  Input,
  FormGroup,
} from "@mui/material";
import Header from "../components/Header";
import SearchIcon from '@mui/icons-material/Search';
import WineCard from "../components/WineCard";
import axios from "axios";

import * as Api from "../api"

export default function MainPage() {
  const [priceValue, setPriceValue] = useState([80000, 150000]);
  const [pointsValue, setPointsValue] = useState([80, 100]);
  const [tags, setTags] = useState([]);
  const [wineInfos, setWineInfos] = useState([]);

  const tagList = [
    {
      name: 'rich',
      description: "와인이 가지고 있는 풍미, 재료들의 향이나 맛이 풍부(rich)한 와인으로, 여러가지 맛을 진하게 느낄 수 있다",
    },
    {
      name: 'berries',
      description: "fruity하다고도 표현하는 태그로, 과일의 향, 달콤함을 잘 느낄 수 있다. 가볍게 즐기기 좋다",
    },
    {
      name: 'oak',
      description: "와인의 상징과도 같은, 오크통의 '오크'를 의미한다. 오크통 발효 또는 오크칩 숙성의 경우 느낄 수 있고, 바닐라, 삼나무 등 여러가지 세부 향을 가진다",
    },
    {
      name: 'wood',
      description: "오크처럼 특정한 향이나 향목이 아닌, 담백한 나무의 향을 의미한다",
    },
    {
      name: 'earthy',
      description: "우리말로 '흙내음' 정도로 번역할 수 있으며, 젖은 흙의 향을 생각하면 좋다",
    },
    {
      name: 'herb',
      description: "너무나 익숙한 '허브' 향이다. 보통 '허브'를 와인에 수 일동안 담가놓아서 향을 베도록 만든다",
    },
    {
      name: 'dry',
      description: "단 맛보다는 쓴 맛이 두드러지게 느껴지는, 건조한 와인이다. 보통은 적색육에 곁들여 먹는다",
    },
    {
      name: 'acidity',
      description: "산미가 느껴지는 와인을 acidity하다고 한다. 신맛을 느끼기 쉽고, 신선함을 느끼기도 좋다",
    },
    {
      name: 'balance',
      description: "여러가지 향, 산미, 쓴맛, 단맛 등의 균형이 우수한 와인이다. 어느 하나에 치우져치지 않은 맛을 제공한다",
    },
    {
      name: 'smoky',
      description: "주로 '훈연 향'이라고 부르는 향으로, 와인이 숙성되기 전에 구워진 오크통의 향이 입혀지는 경우이다",
    },
    {
      name: 'crisp',
      description: "와인 맛이 바삭(crisp)하다니, 이게 무슨 말일까? 와인에서 바삭하다는 말은 햇사과와 같이 신선한 과일, 아삭한 과일에서 느껴지는 산미를 의미한다",
    },
    {
      name: 'tannins',
      description: "탄닌은 숙성된 와인보다 신선한 와인에서 주로 느낄 수 있는 맛으로, 쓰고 떫은 맛이 강조된다. 입문자가 도전하기에는 어려운 맛이기도 하다",
    },
    // heavy 태그 생략 : full-bodied와 같은 특징을 설명함
    {
      name: 'solid',
      description: "와인이...고체(solid)라고..? 솔리드한 와인은 컴팩트하고 단단한 맛을 의미한다. 완성도가 높고, 갈무리가 잘 된, 좋은 품질의 와인을 주로 솔리드하다고 칭하기도 한다",
    },
    {
      name: 'sweet',
      description: "말 그대로 '달콤한' 와인이다. dry 태그와 정 반대에 위치하는 태그로, 누구나 쉽게 즐길 수 있고 안주에 크게 구애를 받지 않는다",
    },
    {
      name: 'full-bodied',
      description: "바디감(body)은 와인을 설명하는 아주 중요한 지표이다. 그 중에서도 full-bodied는 밀도감과 지속성이 아주 강한 와인으로, 두유와도 같은 느낌을 준다",
    }
  ]

  const handleChange = (e, newValue) => {
    if (e.target.name === "price") {
      setPriceValue(newValue);
    } else {
      setPointsValue(newValue);
    }
  };

const TagHandle = (event) => {
  const selected = event.target.value
  setTags(tags.includes(selected) ? tags.filter(tag=>tag!==selected) : [...tags, selected])
}

const SubmitHandle = () => {
  if(tags.length === 0){
    alert("최소한 하나 이상의 태그를 선택해주세요")
    return;
  }
  else{
    const minimumPrice = 3000 // krw 3,000
    const maximumPrice = 500000 // krw 500,000
    const priceInterval = maximumPrice - minimumPrice
  
    const searchBody = {
      tags,
      minPrice: Math.round(((priceValue[0] - minimumPrice)/priceInterval) * 100),
      maxPrice: Math.round(((priceValue[1] - minimumPrice)/priceInterval) * 100),
      minPoints: pointsValue[0],
      maxPoints: pointsValue[1],
    }
  
    console.log(searchBody)
  
    Api.post("main/search", searchBody)
      .then(res => {
        setWineInfos(res.data)
        console.log(res.data)
      })
  }
}

  return (
    <>
      <Header />
      <Container maxWidth="lg" className="mt-3" component="div" xs="1">
        <Grid container component="div" sx={{ border: "1px solid lightgray", p: 3 }} spacing={2}>
          {/* tag selector */}
          <Grid item xs="6" component="div" sx={{ mb: 3, borderRight: "1px grey solid" }}>
            <FormGroup onChange={TagHandle} row={true}>
              <FormLabel sx={{ mr: 2 }}>Tags</FormLabel>
              {tagList.map(tagInfo => {
                return (
                  <Tooltip title={tagInfo.description} placement="top-end">
                    <FormControlLabel control={<Checkbox />} label={tagInfo.name} value={tagInfo.name}/>
                  </Tooltip>
                )
              })}
            </FormGroup>
          </Grid>

          {/* sliders */}
          <Grid item xs="6">
            <Box
              component="div"
              sx={{ mb: 3.5 }}
              style={{ display: "flex", alignItems: "center" }}
            >
              <FormLabel sx={{ mr: 2 }}>Price</FormLabel>
              <Slider
                min={3000}
                max={500000}
                step={1000}
                name="price"
                value={priceValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                sx={{ width: 300, marginRight: 2 }}
              />
              <Input
                type="text"
                value={priceValue[0]}
                onChange={e => {
                  setPriceValue([Number(e.target.value), priceValue[1]]);
                }}
              />
              ~
              <Input
                type="text"
                value={priceValue[1]}
                onChange={e => {
                  setPriceValue([priceValue[0], Number(e.target.value)]);
                }}
              />
            </Box>
            <Box
              component="div"
              sx={{ mb: 1 }}
              style={{ display: "flex", alignItems: "center", verticalAlign: "center"}}
            >
              <FormLabel sx={{ mr: 2 }}>Points</FormLabel>
              <Slider
                name="points"
                value={pointsValue}
                onChange={handleChange}
                valueLabelDisplay="auto"
                sx={{ width: 300, marginRight: 2 }}
              />
              {pointsValue[0]} ~ {pointsValue[1]} 점
            </Box>
          </Grid>

          {/* submit button */}
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="error" // not error, just for color
              onClick={SubmitHandle}
              startIcon={<SearchIcon sx={{color: "#FFF"}}/>}
            >
              FIND MY WINES
            </Button>
          </Grid>
        </Grid>

        <Grid container xs={12} spacing={1}>
          {
            wineInfos.map(wine => {
              return (
                <Grid item xs={4}>
                  <WineCard
                  wineInfo={{
                    title : wine.title,
                    url : wine.image,
                    location : wine.region_1,
                    type: wine.keyword.join(" "),
                    description: wine.description,
                  }}
                />
              </Grid>
            )
            })
          }
        </Grid>
      </Container>
    </>
  );
}
