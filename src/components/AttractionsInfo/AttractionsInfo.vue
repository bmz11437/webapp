<template>
  <div class="attractions-info">
    <Tabs type="card">
      <TabPane label="景点信息">
        <Collapse v-model="value1">
          <Panel name="1">
            玩点
            <p slot="content">史蒂夫·乔布斯（Steve Jobs），1955年2月24日生于美国加利福尼亚州旧金山，美国发明家、企业家、美国苹果公司联合创办人。</p>
          </Panel>
          <Panel name="2">
            游玩建议
            <p
              slot="content"
            >斯蒂夫·盖瑞·沃兹尼亚克（Stephen Gary Wozniak），美国电脑工程师，曾与史蒂夫·乔布斯合伙创立苹果电脑（今之苹果公司）。斯蒂夫·盖瑞·沃兹尼亚克曾就读于美国科罗拉多大学，后转学入美国著名高等学府加州大学伯克利分校（UC Berkeley）并获得电机工程及计算机（EECS）本科学位（1987年）。</p>
          </Panel>
          <Panel name="3">
            注意事项
            <p
              slot="content"
            >乔纳森·伊夫是一位工业设计师，现任Apple公司设计师兼资深副总裁，英国爵士。他曾参与设计了iPod，iMac，iPhone，iPad等众多苹果产品。除了乔布斯，他是对苹果那些著名的产品最有影响力的人。</p>
          </Panel>
        </Collapse>
      </TabPane>
      <TabPane label="消费情况">
        <div class="consumption">
          <img :src="resourceUrl+'/images/food1.jpg'" />
          <div class="price">
            <div class="num">$20</div>
            <div class="star">
              <Rate show-text allow-half value="3.8">
                <span style="color: #f5a623">3.8分</span>
              </Rate>
            </div>
          </div>
        </div>

        <div class="consumption">
          <img :src="resourceUrl+'/images/food1.jpg'" />
          <div class="price">
            <div class="num">$20</div>
            <div class="star">
              <Rate show-text allow-half value="3.8">
                <span style="color: #f5a623">3.8分</span>
              </Rate>
            </div>
          </div>
        </div>
        <div class="consumption">
          <img :src="resourceUrl+'/images/food1.jpg'" />
          <div class="price">
            <div class="num">$20</div>
            <div class="star">
              <Rate show-text allow-half value="3.8">
                <span style="color: #f5a623">3.8分</span>
              </Rate>
            </div>
          </div>
        </div>
        <div class="consumption">
          <img :src="resourceUrl+'/images/food1.jpg'" />
          <div class="price">
            <div class="num">$20</div>
            <div class="star">
              <Rate show-text allow-half value="3.8">
                <span style="color: #f5a623">3.8分</span>
              </Rate>
            </div>
          </div>
        </div>
        <div class="consumption">
          <img :src="resourceUrl+'/images/food1.jpg'" />
          <div class="price">
            <div class="num">$20</div>
            <div class="star">
              <Rate show-text allow-half value="3.8">
                <span style="color: #f5a623">3.8分</span>
              </Rate>
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="用户评论">
        <List>
          <ListItem>
            <ListItemMeta
              avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
              title="This is title"
              description="This is description, this is description."
            />
          </ListItem>
          <ListItem>
            <ListItemMeta
              avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
              title="This is title"
              description="This is description, this is description."
            />
          </ListItem>
          <ListItem>
            <ListItemMeta
              avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
              title="This is title"
              description="This is description, this is description."
            />
          </ListItem>
          <ListItem>
            <ListItemMeta
              avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
              title="This is title"
              description="This is description, this is description."
            />
          </ListItem>
          <ListItem>
            <ListItemMeta
              avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
              title="This is title"
              description="This is description, this is description."
            />
          </ListItem>
          <ListItem>
            <ListItemMeta
              avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
              title="This is title"
              description="This is description, this is description."
            />
          </ListItem>
          <ListItem>
            <ListItemMeta
              avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
              title="This is title"
              description="This is description, this is description."
            />
          </ListItem>
          <ListItem>
            <ListItemMeta
              avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
              title="This is title"
              description="This is description, this is description."
            />
          </ListItem>
          <ListItem>
            <ListItemMeta
              avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
              title="This is title"
              description="This is description, this is description."
            />
          </ListItem>
          <ListItem>
            <ListItemMeta
              avatar="https://dev-file.iviewui.com/userinfoPDvn9gKWYihR24SpgC319vXY8qniCqj4/avatar"
              title="This is title"
              description="This is description, this is description."
            />
          </ListItem>
        </List>
      </TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
  props: {
    resourceUrl: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {
      value1: ['1', '2', '3', '4', '5', '6'],
    }
  }
}
</script>

<style lang="scss" scoped>
.attractions-info {
  width: 100%;
  height: 100%;
  .swiper-item {
    width: 100%;
    height: 100%;
    overflow-y: auto;
  }
  .consumption {
    width: 100%;
    height: 4rem;
    background: red;
    position: relative;
    margin-bottom: 0.3rem;
    img {
      width: 100%;
      height: 100%;
    }
    .price {
      width: 100%;
      height: auto;
      background: #000000a8;
      color: white;
      padding: 0.1rem 0.2rem;
      font-size: 0.3rem;
      line-height: 0.5rem;
      position: absolute;
      bottom: 0;
      .num {
        width: 1rem;
        display: inline-block;
      }
      .star {
        width: calc(100% - 1rem);
        float: right;
        text-align: right;
      }
    }
  }
}
</style>