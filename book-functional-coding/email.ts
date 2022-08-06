interface User {
	email: string;
	recCount: number; // 친구 추천 수
}

interface Coupon {
	name: string;
	rank: "good" | "bad" | "best";
}

type Users = User[]
type Coupons = Coupon[]

type Email = {
	to: string;
	coupon: string[];
}

function selectCouponListByRank(couponList: Coupons, rank: Coupon["rank"]): Coupons {
	return couponList.filter(coupon => coupon.rank === rank)
}

function getUserLank(users: Users) {
  return users.map(user => {
    const rank = user.recCount >= 10 ? "best" : "good"
    return {
      ...user,
      rank
    }
  })
}

function makeEmail(rankedUser, goodCoupon, bestCoupon) {
  return rankedUser.map(user => {
    if (user.rank === "best") {
      return {
        to: user.email,
        coupons: bestCoupon
      }
    }
    else {
      return {
        to: user.email,
        coupons: goodCoupon
      }
    }
  })
}

function sendEmails() {
  const coupons = getCouponList()
  const users = getUserList()
  const rankedUser = getUserLank(users)
  const goodCoupon = selectCouponListByRank(coupons, "good")
  const bestCoupon = selectCouponListByRank(coupons, "best")
  const emails = makeEmail(rankedUser, goodCoupon, bestCoupon)
  emails.map(email => {
    // 전송 시스템으로 이메일 전송
  })
}